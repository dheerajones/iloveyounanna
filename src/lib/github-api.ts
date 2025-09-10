// GitHub API integration for triggering deployments
// This allows static sites to trigger GitHub Actions

interface GitHubWorkflowDispatch {
  ref: string
  inputs?: Record<string, string>
}

interface MailData {
  from: string
  to: string
  subject: string
  content: string
  customDate: string
}

export class GitHubDeploymentTrigger {
  private owner: string
  private repo: string
  private token: string

  constructor(owner: string, repo: string, token: string) {
    this.owner = owner
    this.repo = repo
    this.token = token
  }

  /**
   * Trigger GitHub Actions workflow dispatch
   * This will start the redeployment process
   */
  async triggerDeployment(mailData: MailData): Promise<boolean> {
    try {
      const workflowDispatch: GitHubWorkflowDispatch = {
        ref: 'main', // or 'master' depending on your default branch
        inputs: {
          reason: `New love letter: "${mailData.subject}"`,
          mail_data: JSON.stringify(mailData),
          timestamp: new Date().toISOString()
        }
      }

      const response = await fetch(
        `https://api.github.com/repos/${this.owner}/${this.repo}/actions/workflows/redeploy.yml/dispatches`,
        {
          method: 'POST',
          headers: {
            'Authorization': `token ${this.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(workflowDispatch)
        }
      )

      if (response.status === 204) {
        console.log('✅ GitHub Actions workflow triggered successfully!')
        return true
      } else {
        console.error('❌ Failed to trigger workflow:', response.status, response.statusText)
        return false
      }
    } catch (error) {
      console.error('❌ Error triggering deployment:', error)
      return false
    }
  }

  /**
   * Check if a workflow run is in progress
   */
  async checkDeploymentStatus(): Promise<'running' | 'completed' | 'failed' | 'unknown'> {
    try {
      const response = await fetch(
        `https://api.github.com/repos/${this.owner}/${this.repo}/actions/runs?per_page=1`,
        {
          headers: {
            'Authorization': `token ${this.token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        }
      )

      if (response.ok) {
        const data = await response.json()
        const latestRun = data.workflow_runs[0]
        
        if (latestRun) {
          switch (latestRun.status) {
            case 'in_progress':
            case 'queued':
              return 'running'
            case 'completed':
              return latestRun.conclusion === 'success' ? 'completed' : 'failed'
            default:
              return 'unknown'
          }
        }
      }
      
      return 'unknown'
    } catch (error) {
      console.error('Error checking deployment status:', error)
      return 'unknown'
    }
  }
}

/**
 * Create a GitHub deployment trigger instance
 * Uses environment variables for secure token management
 */
export function createGitHubTrigger(): GitHubDeploymentTrigger {
  const owner = 'dheerajones' // Your GitHub username
  const repo = 'iloveyounanna' // Your repository name
  const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN || 'demo-token'
  
  return new GitHubDeploymentTrigger(owner, repo, token)
}

/**
 * Use GitHub's repository dispatch event
 * This is the recommended way to trigger workflows from external sources
 */
export async function triggerRepositoryDispatch(
  owner: string,
  repo: string,
  token: string,
  mailData: MailData
): Promise<boolean> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'new-mail',
          client_payload: {
            mail: mailData,
            timestamp: new Date().toISOString()
          }
        })
      }
    )

    return response.status === 204
  } catch (error) {
    console.error('Error triggering repository dispatch:', error)
    return false
  }
}