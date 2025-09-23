import Profile from './components/Profile'
import './App.css'
import './components/Profile.css'

function App() {
  const users = [
  {
    id: 1,
    name: "Leanne Graham",
    role: "Frontend Developer",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Leanne"
  },
  {
    id: 2,
    name: "Ervin Howell",
    role: "Backend Developer",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Ervin"
  },
  {
    id: 3,
    name: "Clementine Bauch",
    role: "UI/UX Designer",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Clementine"
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    role: "QA Engineer",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Patricia"
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    role: "Project Manager",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Chelsey"
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    role: "DevOps Engineer",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Dennis"
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    role: "Data Scientist",
    avatarUrl: "https://api.dicebear.com/7.x/bottts/svg?seed=Kurtis"
  }
]


  return (
    <>
      <h2>Профілі користувачів</h2>
      <div className="profiles">
        {users.map(user => (
          <Profile
            key={user.id}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </>
  )
}

export default App
