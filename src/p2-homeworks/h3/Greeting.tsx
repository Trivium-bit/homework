import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void// need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers, onEnter } // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input; // need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                //onBlur={setNameCallback} если убрать фокус с элемента, сработает setNameCallback
                />
                <button className={s.submit} onClick={addUser} disabled={!name} >add</button>
                <span>{totalUsers}</span>
            </div>
            <div className={s.error}>
                {error}
            </div>
        </div>
    );
}

export default Greeting;
