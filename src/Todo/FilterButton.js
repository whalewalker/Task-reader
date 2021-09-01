const FilterButton = ({name, isPressed, setFilter}) => {

    return (
        <button className="btn toggle-btn" aria-pressed={isPressed}>
            <span className="visually-hidden">Show </span>
            <span>{name}</span>
            <span className="visually-hidden"> tasks</span>
        </button>
    );
};

export default FilterButton;