import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import UnitPage from './pages/UnitPage'
import LessonPage from './pages/LessonPage'
import GrammarBankPage, { GrammarDetailPage } from './pages/GrammarBankPage'
import VocabularyBankPage from './pages/VocabularyBankPage'
import ScriptsPage from './pages/ScriptsPage'
import SearchPage from './pages/SearchPage'
import ReviewPage from './pages/ReviewPage'
import MediaPage from './pages/MediaPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="book" element={<BookPage />} />
        <Route path="unit/:unitId" element={<UnitPage />} />
        <Route path="unit/:unitId/lesson/:lessonId" element={<LessonPage />} />
        <Route path="bank/grammar" element={<GrammarBankPage />} />
        <Route path="bank/grammar/:code" element={<GrammarDetailPage />} />
        <Route path="bank/vocabulary" element={<VocabularyBankPage />} />
        <Route path="scripts" element={<ScriptsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
