
const Card = ({img}) => {
    return (
        <div className="card h-44 md:h-72 w-full bg-base-100">
                <img src={img} alt="Shoes" className="rounded-xl w-full h-full object-cover" />
        </div>
    );
};

export default Card;