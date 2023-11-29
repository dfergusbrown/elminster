import Intro from '../components/Intro'
import { Routes, Route } from 'react-router-dom';
import QuizGame from '../components/QuizGame';

const Inside = () => {

    return(
        <div className="background">
            <Routes>
                <Route index element={<Intro />} />
                <Route path='QuizGame' element={<QuizGame />} />
            </Routes>
        </div>
    )
}



export default Inside;

