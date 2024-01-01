import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // api 추가 가능
        navigate('/main', { state: {name, age, gender}});
        console.log({age,gender});
    };



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">아이 이름(별명) :</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            
            <div>
                <label htmlFor="age">아이 나이 :</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="gender">아이 성별:</label>
                <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">성별 선택</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                </select>
            </div>
            <button type="submit">등 록</button>
        </form>
    );



};

export default RegisterPage;