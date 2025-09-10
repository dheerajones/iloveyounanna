// 'use client'

// import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { Heart, Mail, Calendar, Plus, Search, ArrowLeft, Inbox, Star, User } from 'lucide-react'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Badge } from '@/components/ui/badge'
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
// import { Textarea } from '@/components/ui/textarea'
// import { Label } from '@/components/ui/label'
// import { ThemeToggle } from '@/components/theme-toggle'

// interface Mail {
//   id: string
//   date: string
//   from: string
//   to: string
//   subject: string
//   content: string
//   timestamp: string
//   starred: boolean
//   read: boolean
// }

// const sampleMails: Mail[] = [
//   {
//     id: '1',
//     date: '2024-01-15',
//     from: 'Me',
//     to: 'My Love',
//     subject: 'Good morning, beautiful! 🌅',
//     content: 'Every morning I wake up thinking about you. Your smile is the first thing that comes to my mind, and it fills my heart with so much joy. I hope you have an amazing day today, filled with happiness and success. Remember, no matter how far apart we are, my love for you grows stronger with each passing day. Sending you all my love and warm hugs! ❤️',
//     timestamp: '08:30 AM',
//     starred: true,
//     read: true
//   },
//   {
//     id: '2',
//     date: '2024-01-14',
//     from: 'My Love',
//     to: 'Me',
//     subject: 'Dreaming of you 💭',
//     content: 'Hey my love, I had the most beautiful dream about us last night. We were together, walking hand in hand on a beach at sunset. It felt so real, so perfect. Waking up without you by my side was hard, but knowing we\'ll be together soon keeps me going. Thank you for being the most amazing person in my life. I love you more than words can express.',
//     timestamp: '09:15 PM',
//     starred: false,
//     read: true
//   },
//   {
//     id: '3',
//     date: '2024-01-13',
//     from: 'Me',
//     to: 'My Love',
//     subject: 'Counting the days... ⏰',
//     content: 'Only a few more days until we can be together again! I\'ve marked it on my calendar and I\'m counting down every single second. I\'ve planned so many things for us to do when we meet. From long walks to deep conversations, from cooking together to just holding hands and doing nothing. Every moment with you is precious. Can\'t wait to see you, my love! 💕',
//     timestamp: '02:45 PM',
//     starred: true,
//     read: false
//   },
//   {
//     id: '4',
//     date: '2024-01-12',
//     from: 'My Love',
//     to: 'Me',
//     subject: 'You make my world better 🌟',
//     content: 'I was thinking today about how much you\'ve changed my life. Before you, my world was black and white, but with you, everything is in vibrant color. You\'ve taught me what true love means, what it means to care for someone so deeply. Thank you for loving me, for understanding me, for being my rock when I need one. You\'re not just my love, you\'re my best friend, my soulmate, my everything.',
//     timestamp: '07:20 PM',
//     starred: false,
//     read: true
//   },
//   {
//     id: '5',
//     date: '2024-01-11',
//     from: 'Me',
//     to: 'My Love',
//     subject: 'Just wanted to say... 💖',
//     content: 'I love you. Not just the big, dramatic love they show in movies, but the quiet, steady love that grows stronger every day. The love that makes me smile when I think of you, that gives me strength when I\'m weak, that makes me want to be a better person. You\'re my today and all of my tomorrows. I love you, endlessly and completely.',
//     timestamp: '11:00 AM',
//     starred: true,
//     read: false
//   }
// ]

// export default function MailsPage() {
//   const [mails, setMails] = useState<Mail[]>([])
//   const [filteredMails, setFilteredMails] = useState<Mail[]>([])
//   const [selectedDate, setSelectedDate] = useState<string>('')
//   const [searchTerm, setSearchTerm] = useState('')
//   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
//   const [selectedMail, setSelectedMail] = useState<Mail | null>(null)
//   const [newMail, setNewMail] = useState({
//     from: '',
//     to: '',
//     subject: '',
//     content: ''
//   })

//   useEffect(() => {
//     const savedMails = localStorage.getItem('loveLetters')
//     if (savedMails) {
//       setMails(JSON.parse(savedMails))
//     } else {
//       setMails(sampleMails)
//     }
//   }, [])

//   useEffect(() => {
//     let filtered = mails

//     if (selectedDate) {
//       filtered = filtered.filter(mail => mail.date === selectedDate)
//     }

//     if (searchTerm) {
//       filtered = filtered.filter(mail => 
//         mail.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         mail.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         mail.from.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     }

//     setFilteredMails(filtered)
//   }, [mails, selectedDate, searchTerm])

//   const uniqueDates = Array.from(new Set(mails.map(mail => mail.date))).sort((a, b) => b.localeCompare(a))

//   const handleAddMail = () => {
//     if (newMail.from && newMail.to && newMail.subject && newMail.content) {
//       const mail: Mail = {
//         id: Date.now().toString(),
//         date: new Date().toISOString().split('T')[0],
//         from: newMail.from,
//         to: newMail.to,
//         subject: newMail.subject,
//         content: newMail.content,
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//         starred: false,
//         read: false
//       }

//       const updatedMails = [...mails, mail]
//       setMails(updatedMails)
//       localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
      
//       setNewMail({ from: '', to: '', subject: '', content: '' })
//       setIsAddDialogOpen(false)
//     }
//   }

//   const toggleStar = (mailId: string) => {
//     const updatedMails = mails.map(mail => 
//       mail.id === mailId ? { ...mail, starred: !mail.starred } : mail
//     )
//     setMails(updatedMails)
//     localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
//   }
  

//   const markAsRead = (mailId: string) => {
//     const updatedMails = mails.map(mail => 
//       mail.id === mailId ? { ...mail, read: true } : mail
//     )
//     setMails(updatedMails)
//     localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
//   }

//     const deleteMail = (mailId: string) => {
//     const updatedMails = mails.filter(mail => mail.id !== mailId)
//     setMails(updatedMails)
//     localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
    
//     if (selectedMail?.id === mailId) {
//       setSelectedMail(null)
//     }
//   }


//   return (
//     <div className="min-h-screen love-pattern">
//       <div className="love-symbols">
//         <div className="love-symbol">❤️</div>
//         <div className="love-symbol">💕</div>
//         <div className="love-symbol">💖</div>
//         <div className="love-symbol">💗</div>
//         <div className="love-symbol">💓</div>
//       </div>

//       <div className="love-watermark">I LOVE YOU❤️</div>

//       <div className="fixed top-4 right-4 z-50">
//         <ThemeToggle />
//       </div>

//       <div className="gmail-interface min-h-screen">
//         <header className="gmail-header">
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="sm" asChild>
//               <a href="/iloveyounanna/" className="flex items-center space-x-2">
//                 <ArrowLeft className="w-4 h-4" />
//                 <span>Back Home</span>
//               </a>
//             </Button>
//             <div className="flex items-center space-x-2">
//               <Mail className="w-6 h-6 text-pink-500 gentle-float" />
//               <h1 className="text-2xl font-bold love-text">Our Love Letters</h1>
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//               <Input
//                 placeholder="Search letters..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 w-64"
//               />
//             </div>
            
//             <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
//               <DialogTrigger asChild>
//                 <Button className="love-button text-white">
//                   <Plus className="w-4 h-4 mr-2" />
//                   Compose
//                 </Button>
//               </DialogTrigger>
//               <DialogContent className="max-w-2xl love-card">
//                 <DialogHeader>
//                   <DialogTitle className="text-center text-2xl font-bold text-pink-600">
//                     Write a New Love Letter
//                   </DialogTitle>
//                 </DialogHeader>
//                 <div className="space-y-4">
//                   <div>
//                     <Label htmlFor="from">From</Label>
//                     <Input
//                       id="from"
//                       value={newMail.from}
//                       onChange={(e) => setNewMail({...newMail, from: e.target.value})}
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="to">To</Label>
//                     <Input
//                       id="to"
//                       value={newMail.to}
//                       onChange={(e) => setNewMail({...newMail, to: e.target.value})}
//                       placeholder="Your love's name"
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="subject">Subject</Label>
//                     <Input
//                       id="subject"
//                       value={newMail.subject}
//                       onChange={(e) => setNewMail({...newMail, subject: e.target.value})}
//                       placeholder="A beautiful subject..."
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="content">Your Message</Label>
//                     <Textarea
//                       id="content"
//                       value={newMail.content}
//                       onChange={(e) => setNewMail({...newMail, content: e.target.value})}
//                       placeholder="Write your heartfelt message here..."
//                       rows={6}
//                     />
//                   </div>
//                   <Button onClick={handleAddMail} className="w-full love-button text-white">
//                     <Heart className="w-4 h-4 mr-2" fill="currentColor" />
//                     Send Love Letter
//                   </Button>
//                 </div>
//               </DialogContent>
//             </Dialog>
//           </div>
//         </header>

//         <div className="flex">
//           <aside className="gmail-sidebar">
//             <div className="space-y-4">
//               <Button 
//                 variant={selectedDate === '' ? 'default' : 'ghost'} 
//                 className="w-full justify-start love-button text-white"
//                 onClick={() => setSelectedDate('')}
//               >
//                 <Inbox className="w-4 h-4 mr-2" />
//                 All Letters ({mails.length})
//               </Button>
              
//               <Button 
//                 variant="ghost" 
//                 className="w-full justify-start"
//               >
//                 <Star className="w-4 h-4 mr-2" />
//                 Starred ({mails.filter(m => m.starred).length})
//               </Button>

//               <div className="border-t pt-4">
//                 <h3 className="font-semibold mb-2">Filter by Date</h3>
//                 <div className="space-y-1">
//                   {uniqueDates.map(date => (
//                     <Button
//                       key={date}
//                       variant={selectedDate === date ? 'default' : 'ghost'}
//                       size="sm"
//                       onClick={() => setSelectedDate(date)}
//                       className="w-full justify-start text-left"
//                     >
//                       <Calendar className="w-3 h-3 mr-2" />
//                       {date}
//                     </Button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </aside>

//           <main className="gmail-main">
//             {selectedMail ? (
//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="love-card rounded-lg p-6"
//               >
//                 <div className="flex items-center justify-between mb-4">
//                   <Button 
//                     variant="ghost" 
//                     onClick={() => setSelectedMail(null)}
//                   >
//                     ← Back to letters
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => toggleStar(selectedMail.id)}
//                   >
//                     <Star className={`w-4 h-4 ${selectedMail.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
//                   </Button>
//                 </div>
                
//                 <div className="border-b pb-4 mb-4">
//                   <h2 className="text-2xl font-bold mb-2">{selectedMail.subject}</h2>
//                   <div className="flex items-center justify-between text-sm text-gray-600">
//                     <div className="flex items-center space-x-2">
//                       <User className="w-4 h-4" />
//                       <span>
//                         <strong>{selectedMail.from}</strong> → {selectedMail.to}
//                       </span>
//                     </div>
//                     <div className="text-right">
//                       <div>{selectedMail.date}</div>
//                       <div>{selectedMail.timestamp}</div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="prose max-w-none">
//                   <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
//                     {selectedMail.content}
//                   </p>
//                 </div>
//               </motion.div>
//             ) : (
//               <div className="space-y-2">
//                 {filteredMails.length === 0 ? (
//                   <div className="text-center py-20">
//                     <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//                     <p className="text-xl text-gray-500">No letters found. Write your first love letter!</p>
//                   </div>
//                 ) : (
//                   filteredMails.map((mail) => (
//                     <motion.div
//                       key={mail.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                       onClick={() => {
//                         setSelectedMail(mail)
//                         markAsRead(mail.id)
//                       }}
//                       className={`gmail-item love-card cursor-pointer ${!mail.read ? 'font-semibold' : ''}`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center space-x-3 flex-1">
//                           <div className="flex-shrink-0">
//                             <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
//                               <Heart className="w-4 h-4 text-pink-500 pulsing-heart" fill="currentColor" />
//                             </div>
//                           </div>
                          
//                           <div className="flex-1 min-w-0">
//                             <div className="flex items-center space-x-2">
//                               <span className="truncate">{mail.from}</span>
//                               {!mail.read && (
//                                 <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                               )}
//                             </div>
//                             <p className="text-sm font-medium text-gray-900 truncate">{mail.subject}</p>
//                             <p className="text-sm text-gray-500 truncate">
//                               {mail.content.substring(0, 100)}...
//                             </p>
//                           </div>
//                         </div>
                        
//                         <div className="flex items-center space-x-2 text-sm text-gray-500">
//                           <Badge variant="secondary" className="text-xs">
//                             {mail.date}
//                           </Badge>
//                           <span>{mail.timestamp}</span>
//                           <Button
//                             variant="ghost"
//                             size="sm"
//                             onClick={(e) => {
//                               e.stopPropagation()
//                               toggleStar(mail.id)
//                             }}
//                           >
//                             <Star className={`w-4 h-4 ${mail.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
//                           </Button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   ))
//                 )}
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>
//   )
// }


'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Calendar, Plus, Search, ArrowLeft, Inbox, Star, User, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Mail {
  id: string
  date: string
  from: string
  to: string
  subject: string
  content: string
  timestamp: string
  starred: boolean
  read: boolean
}

const sampleMails: Mail[] = [
  {
    id: '1',
    date: '2024-01-15',
    from: 'Me',
    to: 'My Love',
    subject: 'Good morning, beautiful! 🌅',
    content: 'Every morning I wake up thinking about you. Your smile is the first thing that comes to my mind, and it fills my heart with so much joy. I hope you have an amazing day today, filled with happiness and success. Remember, no matter how far apart we are, my love for you grows stronger with each passing day. Sending you all my love and warm hugs! ❤️',
    timestamp: '08:30 AM',
    starred: true,
    read: true
  },
  {
    id: '2',
    date: '2024-01-14',
    from: 'My Love',
    to: 'Me',
    subject: 'Dreaming of you 💭',
    content: 'Hey my love, I had the most beautiful dream about us last night. We were together, walking hand in hand on a beach at sunset. It felt so real, so perfect. Waking up without you by my side was hard, but knowing we\'ll be together soon keeps me going. Thank you for being the most amazing person in my life. I love you more than words can express.',
    timestamp: '09:15 PM',
    starred: false,
    read: true
  },
  {
    id: '3',
    date: '2024-01-13',
    from: 'Me',
    to: 'My Love',
    subject: 'Counting the days... ⏰',
    content: 'Only a few more days until we can be together again! I\'ve marked it on my calendar and I\'m counting down every single second. I\'ve planned so many things for us to do when we meet. From long walks to deep conversations, from cooking together to just holding hands and doing nothing. Every moment with you is precious. Can\'t wait to see you, my love! 💕',
    timestamp: '02:45 PM',
    starred: true,
    read: false
  },
  {
    id: '4',
    date: '2024-01-12',
    from: 'My Love',
    to: 'Me',
    subject: 'You make my world better 🌟',
    content: 'I was thinking today about how much you\'ve changed my life. Before you, my world was black and white, but with you, everything is in vibrant color. You\'ve taught me what true love means, what it means to care for someone so deeply. Thank you for loving me, for understanding me, for being my rock when I need one. You\'re not just my love, you\'re my best friend, my soulmate, my everything.',
    timestamp: '07:20 PM',
    starred: false,
    read: true
  },
  {
    id: '5',
    date: '2024-01-11',
    from: 'Me',
    to: 'My Love',
    subject: 'Just wanted to say... 💖',
    content: 'I love you. Not just the big, dramatic love they show in movies, but the quiet, steady love that grows stronger every day. The love that makes me smile when I think of you, that gives me strength when I\'m weak, that makes me want to be a better person. You\'re my today and all of my tomorrows. I love you, endlessly and completely.',
    timestamp: '11:00 AM',
    starred: true,
    read: false
  }
]

export default function MailsPage() {
  const [mails, setMails] = useState<Mail[]>([])
  const [filteredMails, setFilteredMails] = useState<Mail[]>([])
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState('')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null)
  const [newMail, setNewMail] = useState({
    from: '',
    to: '',
    subject: '',
    content: ''
  })

  useEffect(() => {
    const savedMails = localStorage.getItem('loveLetters')
    if (savedMails) {
      setMails(JSON.parse(savedMails))
    } else {
      setMails(sampleMails)
    }
  }, [])

  useEffect(() => {
    let filtered = mails
    if (selectedDate) {
      filtered = filtered.filter(mail => mail.date === selectedDate)
    }
    if (searchTerm) {
      filtered = filtered.filter(mail => 
        mail.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mail.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mail.from.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    setFilteredMails(filtered)
  }, [mails, selectedDate, searchTerm])

  const uniqueDates = Array.from(new Set(mails.map(mail => mail.date))).sort((a, b) => b.localeCompare(a))

  const handleAddMail = () => {
    if (newMail.from && newMail.to && newMail.subject && newMail.content) {
      const mail: Mail = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        from: newMail.from,
        to: newMail.to,
        subject: newMail.subject,
        content: newMail.content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        starred: false,
        read: false
      }
      const updatedMails = [...mails, mail]
      setMails(updatedMails)
      localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
      
      setNewMail({ from: '', to: '', subject: '', content: '' })
      setIsAddDialogOpen(false)
    }
  }

  const toggleStar = (mailId: string) => {
    const updatedMails = mails.map(mail => 
      mail.id === mailId ? { ...mail, starred: !mail.starred } : mail
    )
    setMails(updatedMails)
    localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
  }
  
  const markAsRead = (mailId: string) => {
    const updatedMails = mails.map(mail => 
      mail.id === mailId ? { ...mail, read: true } : mail
    )
    setMails(updatedMails)
    localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
  }
    
  const deleteMail = (mailId: string) => {
    const updatedMails = mails.filter(mail => mail.id !== mailId)
    setMails(updatedMails)
    localStorage.setItem('loveLetters', JSON.stringify(updatedMails))
    
    if (selectedMail?.id === mailId) {
      setSelectedMail(null)
    }
  }

  return (
    <div className="min-h-screen love-pattern">
      <div className="love-symbols">
        <div className="love-symbol">❤️</div>
        <div className="love-symbol">💕</div>
        <div className="love-symbol">💖</div>
        <div className="love-symbol">💗</div>
        <div className="love-symbol">💓</div>
      </div>
      <div className="love-watermark">I LOVE YOU❤️</div>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <div className="gmail-interface min-h-screen">
        <header className="gmail-header">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/iloveyounanna/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back Home</span>
              </a>
            </Button>
            <div className="flex items-center space-x-2">
              <Mail className="w-6 h-6 text-pink-500 gentle-float" />
              <h1 className="text-2xl font-bold love-text">Our Love Letters</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search letters..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="love-button text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Compose
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl love-card">
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-pink-600">
                    Write a New Love Letter
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="from">From</Label>
                    <Input
                      id="from"
                      value={newMail.from}
                      onChange={(e) => setNewMail({...newMail, from: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="to">To</Label>
                    <Input
                      id="to"
                      value={newMail.to}
                      onChange={(e) => setNewMail({...newMail, to: e.target.value})}
                      placeholder="Your love's name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={newMail.subject}
                      onChange={(e) => setNewMail({...newMail, subject: e.target.value})}
                      placeholder="A beautiful subject..."
                    />
                  </div>
                  <div>
                    <Label htmlFor="content">Your Message</Label>
                    <Textarea
                      id="content"
                      value={newMail.content}
                      onChange={(e) => setNewMail({...newMail, content: e.target.value})}
                      placeholder="Write your heartfelt message here..."
                      rows={6}
                    />
                  </div>
                  <Button onClick={handleAddMail} className="w-full love-button text-white">
                    <Heart className="w-4 h-4 mr-2" fill="currentColor" />
                    Send Love Letter
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>
        <div className="flex">
          <aside className="gmail-sidebar">
            <div className="space-y-4">
              <Button 
                variant={selectedDate === '' ? 'default' : 'ghost'} 
                className="w-full justify-start love-button text-white"
                onClick={() => setSelectedDate('')}
              >
                <Inbox className="w-4 h-4 mr-2" />
                All Letters ({mails.length})
              </Button>
              
              <Button 
                variant="ghost" 
                className="w-full justify-start"
              >
                <Star className="w-4 h-4 mr-2" />
                Starred ({mails.filter(m => m.starred).length})
              </Button>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Filter by Date</h3>
                <div className="space-y-1">
                  {uniqueDates.map(date => (
                    <Button
                      key={date}
                      variant={selectedDate === date ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedDate(date)}
                      className="w-full justify-start text-left"
                    >
                      <Calendar className="w-3 h-3 mr-2" />
                      {date}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <main className="gmail-main">
            {selectedMail ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="love-card rounded-lg p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedMail(null)}
                  >
                    ← Back to letters
                  </Button>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleStar(selectedMail.id)}
                    >
                      <Star className={`w-4 h-4 ${selectedMail.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete this love letter?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your love letter.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => deleteMail(selectedMail.id)}>
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
                
                <div className="border-b pb-4 mb-4">
                  <h2 className="text-2xl font-bold mb-2">{selectedMail.subject}</h2>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>
                        <strong>{selectedMail.from}</strong> → {selectedMail.to}
                      </span>
                    </div>
                    <div className="text-right">
                      <div>{selectedMail.date}</div>
                      <div>{selectedMail.timestamp}</div>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {selectedMail.content}
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="space-y-2">
                {filteredMails.length === 0 ? (
                  <div className="text-center py-20">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500">No letters found. Write your first love letter!</p>
                  </div>
                ) : (
                  filteredMails.map((mail) => (
                    <motion.div
                      key={mail.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        setSelectedMail(mail)
                        markAsRead(mail.id)
                      }}
                      className={`gmail-item love-card cursor-pointer ${!mail.read ? 'font-semibold' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 flex-1">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                              <Heart className="w-4 h-4 text-pink-500 pulsing-heart" fill="currentColor" />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <span className="truncate">{mail.from}</span>
                              {!mail.read && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm font-medium text-gray-900 truncate">{mail.subject}</p>
                            <p className="text-sm text-gray-500 truncate">
                              {mail.content.substring(0, 100)}...
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Badge variant="secondary" className="text-xs">
                            {mail.date}
                          </Badge>
                          <span>{mail.timestamp}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleStar(mail.id)
                            }}
                          >
                            <Star className={`w-4 h-4 ${mail.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Trash2 className="w-4 h-4 text-red-500" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Delete this love letter?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. This will permanently delete your love letter.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => deleteMail(mail.id)}>
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}