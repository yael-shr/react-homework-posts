import Post from './components/Post.jsx'
import './App.css'

function App() {
  return (
    <div>
      <h1>הפוסטים שלי</h1>
      <Post author="ישראל ישראלי" content="זה הפוסט הראשון שלי בריאקט!" />
      <Post author="שרה כהן" content="למידה של קומפוננטות היא מעניינת מאוד." />
      <Post author="אברהם לוי" content="עדכון State בזמן אמת עובד מצוין." />
    </div>
  )
}

export default App