// Test script to verify GitHub API integration
// Run with: GITHUB_TOKEN=your_token node test-github-api.js

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || 'your-github-token-here'
const OWNER = 'dheerajones'
const REPO = 'iloveyounanna'

async function testRepositoryDispatch() {
  console.log('🧪 Testing GitHub Repository Dispatch...')
  
  const mailData = {
    from: 'Test User',
    to: 'My Love',
    subject: 'Test Love Letter 🧪',
    content: 'This is a test love letter to verify the GitHub API integration works correctly.',
    customDate: new Date().toISOString().split('T')[0]
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/dispatches`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
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

    if (response.status === 204) {
      console.log('✅ Repository dispatch triggered successfully!')
      console.log('🚀 Check your GitHub Actions tab to see the deployment in progress')
      console.log('📧 Test mail data:', mailData)
    } else {
      console.log('❌ Failed to trigger repository dispatch')
      console.log('Status:', response.status, response.statusText)
      const errorText = await response.text()
      console.log('Error:', errorText)
    }
  } catch (error) {
    console.error('❌ Error testing repository dispatch:', error)
  }
}

async function checkRepositoryAccess() {
  console.log('🧪 Testing repository access...')
  
  try {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    )

    if (response.ok) {
      const repo = await response.json()
      console.log('✅ Repository access confirmed!')
      console.log('📁 Repository:', repo.full_name)
      console.log('🔗 URL:', repo.html_url)
    } else {
      console.log('❌ Failed to access repository')
      console.log('Status:', response.status, response.statusText)
    }
  } catch (error) {
    console.error('❌ Error checking repository access:', error)
  }
}

// Run all tests
async function runTests() {
  console.log('🚀 Starting GitHub API Tests...\n')
  
  await checkRepositoryAccess()
  console.log('')
  
  await testRepositoryDispatch()
  console.log('')
  
  console.log('🎉 Tests completed!')
  console.log('💡 If all tests passed, your auto-deployment system is ready!')
}

runTests().catch(console.error)
