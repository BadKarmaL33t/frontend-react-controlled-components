import React, {useState} from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = useState('');
    const [ageValue, setAgeValue] = useState(0);
    const [remarksValue, setRemarksValue] = useState('');
    const [newsLetterValue, toggleNewsLetterValue] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nameValue, ageValue, remarksValue, newsLetterValue);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Gegevens</legend>
                <label htmlFor="form-name">
                    Naam:
                    <input type="text"
                           id="form-name"
                           name="name"
                           value={nameValue}
                           onChange={(e) => setNameValue(e.target.value)}
                    />
                </label>
                <label htmlFor="form-age">
                    Leeftijd:
                    <input type="text"
                           id="form-age"
                           name="age"
                           value={ageValue}
                           onChange={(e) => setAgeValue(e.target.value)}
                    />
                </label>
            </fieldset>

            <fieldset>
                <legend>Jouw review</legend>
                <label htmlFor="form-name">
                    Opmerkingen:
                    <textarea id="form-remarks"
                              name="name"
                              value={remarksValue}
                              onChange={(e) => setRemarksValue(e.target.value)}
                              cols="50"
                              rows="5"
                              placeholder="Wat vond je van het recept?"
                    >
                    </textarea>
                </label>
                <label htmlFor="form-newsletter">
                    <input type="checkbox"
                           id="form-newsletter"
                           name="toggle-newsletter"
                           value={newsLetterValue}
                           onChange={(e) => toggleNewsLetterValue(!newsLetterValue)}
                    />
                    Ik schrijf me in voor de nieuwsbrief!
                </label>

            </fieldset>
            <button type="submit">
                Versturen
            </button>
        </form>
        </div>
    );
}

export default App;
