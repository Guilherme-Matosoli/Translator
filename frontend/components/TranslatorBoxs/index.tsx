import { Container } from "./styles";

import axios from 'axios';
import { useState } from "react";


const TranslatorBoxs = () => {

    const [BaseLang, setBaseLang] = useState('');
    const [FinalLang, setFinalLang] = useState('');
    const [Phrase, setPhrase] = useState('');

    const [Translation, setTranslation] = useState('')

    async function Translate(event: any){
        event.preventDefault();

        const response =  await axios.post('http://localhost:4000', {
            "baseLang": BaseLang,
            "finalLang": FinalLang,
            "phrase": Phrase
        } )

        setTranslation(response.data)
    }

    return (
        <Container>
            <form onSubmit={Translate}>
                <div className="initialPhrase">
                    <input onChange={e => setBaseLang(e.target.value)} placeholder="digite a linguagem da frase" type="text" id="baseLang"/>
                    <input onChange={e => setFinalLang(e.target.value)} placeholder="digite a linguagem para tradução" type="text" id="finalLang"/>
                    <textarea onChange={e => setPhrase(e.target.value)} placeholder="digite a frase inicial" name="phrase" id="phrase"></textarea>
                </div>

                <button type="submit" id="translate">TRADUZIR</button>
            </form>
            

            <div className="finalPhrase">
                <textarea placeholder="A tradução aparecerá aqui" value={Translation} disabled name="finalPhrase" id="finalPhrase"></textarea>
            </div>
        </Container>
    )
}

export default TranslatorBoxs