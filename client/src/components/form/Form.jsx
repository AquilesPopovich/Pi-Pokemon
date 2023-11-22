import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './form.module.css'

import validate from './validate'
const FormCreate = ({newPokemon}) => {
    const navigate = useNavigate();
 
    const types = useSelector((state) => state.pokemonsTypes);
    const [inputData, setInputData] = useState({
        name: '',
        sprite: '',
        hp: '',
        atk: '',
        spAtk: '',
        def: '',
        spDef: '',
        spd: '',
        height: '',
        weight: '',
        types: [],
    });

    const [errors, setErrors] = useState({});

    
    const handleChange = (event) => {
      event.preventDefault()
        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            const updatedTypes = checked ? [...inputData.types, value] : inputData.types.filter((type) => type !== value);

            setInputData({
                ...inputData,
                types: updatedTypes.slice(0, 2),
            });
        } else {
            setInputData({
                ...inputData,
                [name]: value,
            });
        }
    };
    

    const handleSubmit = (event) => {
       event.preventDefault()

        const formErrors = validate(inputData);

       
            newPokemon(inputData)
            navigate('/home');
        
    };

    
    return (
        <div className={style.container}>
            <section className={style.formContainer}>
                <article className={style.formArticle}>
                    <h2>Creá tu Pokemon</h2>
                    <form className={style.form} onChange={handleChange}>
                    <label className={style.formLabel}>Name:</label>
                        <input placeholder='example: aquiles' type="text" value={inputData.name} name='name' id='name' onChange={handleChange} />
                        {errors.name !== null && <p>{errors.name}</p>}
                      
                        <label placeholder='example: ' className={style.formLabel}>Image:</label>
                        <input placeholder='example.png' type="text" value={inputData.sprite} className={style.formInput}   name='sprite' id='sprite' onChange={handleChange} />
                        {errors.sprite !== null && <p>{errors.sprite}</p>}


                        <label  className={style.formLabel}> Hp:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.hp} className={style.formInput}  name='hp' id='hp' onChange={handleChange} />
                        {errors.hp !== null && <p>{errors.hp}</p>}

                        <label  className={style.formLabel} >Attack:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.atk} name='atk' className={style.formInput}  onChange={handleChange} />
                        {errors.atk !== null  && <p>{errors.attack}</p>}

                        <label className={style.formLabel} >Special Attack:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.spAtk} className={style.formInput}  name='spAtk' onChange={handleChange} />
                        {errors.spAtk && <p>{errors.spAtk}</p>}

                        <label  className={style.formLabel}>Defense:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.def} className={style.formInput}  name='def' onChange={handleChange} />
                        {errors.def !== null && <p>{errors.def}</p>}

                        <label   className={style.formLabel}>Special Defense:</label>
                        <input  placeholder='minimun attribute value: 100'type="text" value={inputData.spDef} className={style.formInput}  name='spDef' onChange={handleChange} />
                        {errors.spDef !== null && <p>{errors.spDef}</p>}

                        <label   className={style.formLabel}>Speed:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.spd} className={style.formInput}  name='spd' onChange={handleChange} />
                        {errors.spd !== null && <p>{errors.speed}</p>}

                        <label  className={style.formLabel}>Height:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.height} className={style.formInput}  name='height' onChange={handleChange} />
                        {errors.height !== null && <p>{errors.height}</p>}

                        <label  className={style.formLabel}>Weight:</label>
                        <input placeholder='minimun attribute value: 100' type="text" value={inputData.weight} className={style.formInput}  name='weight' onChange={handleChange} />
                        {errors.weight !== null && <p>{errors.weight}</p>}
                        
                        <span>Types:</span>
                        {errors.types !== null && <p>{errors.types}</p>}
                        <div className={style.typesContainer}>
                            {types?.map((type) => (
                                <div key={type.name} className={style.formCheckboxLabel}>
                                <input
                                    className={style.formCheckbox}
                                    type="checkbox"
                                    value={type.name}
                                    onChange={handleChange}
                                    checked={inputData.types?.includes(type.name)}
                                />
                                <label>{type.name}</label>
                                </div>
                            ))}
                        </div>

                        <button onClick={handleSubmit}> Create </button>
                    </form>
                </article>
            </section>
        </div>
    );
};

export default FormCreate;
