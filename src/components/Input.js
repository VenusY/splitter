import '../styles/Input.css';

export default function Input({
  heading,
  image,
  value,
  onEvent,
  invalid,
  isZero,
  htmlId,
}) {
  return (
    <div>
      <div className='input-section__heading-container'>
        <label className='input-section__heading' htmlFor={htmlId}>
          {heading}
        </label>
        <p
          className={`input-section__error ${
            !invalid && isZero ? 'input-section__error--visible' : ''
          }`}
        >
          Can't be zero
        </p>
        <p
          className={`input-section__error ${
            value && invalid && !isZero ? 'input-section__error--visible' : ''
          }`}
        >
          Can't contain letters or symbols
        </p>
      </div>

      <div className='input-section__input-field-container'>
        <input
          className={`input-section__input-field ${
            value
              ? !invalid && !isZero
                ? 'input-section__input-field--valid'
                : 'input-section__input-field--invalid'
              : ''
          }`}
          id={htmlId}
          type='text'
          pattern='\d'
          placeholder='0'
          value={value}
          onChange={onEvent}
        />
        <img className='input-section__icon' src={image} alt='Dollar sign' />
      </div>
    </div>
  );
}
