import React, {useRef, useState} from 'react'
// const React = require('react');

function wordRelay() {
    const [word, setWord] = useState('이태원');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const onRefInput = useRef(null);

    const handlerSubmit = (e) => {
        e.preventDefault();
        if(value.length != 3){
            alert('3글자만 가능합니다!')
        } else{
            if(word[word.length -1] === value[0]){
                setResult("딩동댕");
                setWord(value);
                setValue('');
                onRefInput.current.focus();
            }else{
                setResult("땡");
                setValue('');
                onRefInput.current.focus();
            }
        }
    }

    const handlerChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <header>
                <p>{word}</p>
            </header>
            <article>
                <form action="" onSubmit={handlerSubmit}>
                    <label htmlFor="cba">입력: </label>
                    <input className="abc" ref={onRefInput} type="text" value={value} onChange={handlerChange}/>
                    <input type="submit" value="입력" />
                </form>
            </article>
            <footer>
                <p>정답: {result}</p>
            </footer>
        </>
    )
}

export default wordRelay;