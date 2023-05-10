import usePrototypes from "../hooks/usePrototypes";
import useActions from "./../hooks/useActions";

const Prototypes = () => {
  const prototypes = usePrototypes();
  const { addToOrder } = useActions();

  return (
    <main>
      <div className="prototype">
        {prototypes.map((prototype) => {
          const { id, title, desc, thumbnail, price, pieUrl } = prototype;
          const click = () => {
            addToOrder(id);
          };

          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div>
                  <video
                    src={thumbnail}
                    className="prototype__artwork prototype__edit"
                    autoPlay
                    loop
                    playsInline
                  ></video>
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right">
                    <i className="icon icon--plus" onClick={click}></i>
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Prototypes;
