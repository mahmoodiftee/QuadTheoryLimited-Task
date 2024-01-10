
const Card = ({ img, name}) => {
    return (
        <>
            <div className="card h-44 md:h-72 w-full bg-base-100">
                <img src={img} alt={name} className="rounded-xl w-full h-full object-cover" />
            </div>
            <h1 className="text-center font-medium">{name}</h1>
        </>
    );
};

export default Card;