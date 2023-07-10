import React, {useState} from 'react';
import './App.css';

function App() {
    const [formState, setFormState] = useState({
        name: '',
        age: 0,
        remarks: '',
        newsletter: false
    })

    // const [nameValue, setNameValue] = useState('');
    // const [ageValue, setAgeValue] = useState(0);
    // const [remarksValue, setRemarksValue] = useState('');
    // const [newsLetterChecked, toggleNewsLetterChecked] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
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
                               value={formState.name}
                               onChange={handleFormChange}
                        />
                    </label>
                    <label htmlFor="form-age">
                        Leeftijd:
                        <input type="text"
                               id="form-age"
                               name="age"
                               value={formState.age}
                               onChange={handleFormChange}
                        />
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Jouw review</legend>
                    <label htmlFor="form-name">
                        Opmerkingen:
                        <textarea id="form-remarks"
                                  name="remarks"
                                  value={formState.remarks}
                                  onChange={handleFormChange}
                                  cols="50"
                                  rows="5"
                                  placeholder="Wat vond je van het recept?"
                        >
                    </textarea>
                    </label>
                    <label htmlFor="form-newsletter">
                        <input type="checkbox"
                               id="form-newsletter"
                               name="newsletter"
                               checked={formState.newsletter}
                               onChange={handleFormChange}
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
