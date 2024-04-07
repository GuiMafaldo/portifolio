import { Route, Routes} from 'react-router-dom'
import HomePage from './pages/Home'
import MyProjectsInCarrer from './pages/Works'
import MyInfosInCv from './pages/MyCv'
import AcademyTraining from './pages/Academy'




const Rotas = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<MyProjectsInCarrer />} />
        <Route path='/cv' element={<MyInfosInCv />} />
        <Route path='/academy' element={<AcademyTraining />} />
    </Routes>
)

export default Rotas