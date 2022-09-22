import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";
import PlanetList from "./PlanetList";
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();
  const isModalVisibile = useSelector((state) => state.isModalVisibile);
  const modalData = useSelector((state) => state.modalData);
  const isListVisible = useSelector((state) => state.isListVisible);
  // const isListVisible = useSelector((state) => state.isListVisible);

  return (
    <div className={styles.App}>
      {isListVisible ? (
        <>
          <PlanetList />
          {isModalVisibile && (
            <>
              <div
                onClick={() => dispatch({ type: "SET_MODAL_INVISIBLE" })}
                className={styles.overlay}
              ></div>
              <Modal data={modalData} />
            </>
          )}
        </>
      ) : (
        <img src="https://media1.giphy.com/media/l3978y5HqiEtqupiM/200.gif"></img>
      )}
      {isListVisible ? (
        <button onClick={() => dispatch({ type: "SET_LIST_INVISIBLE" })}>
          Hide
        </button>
      ) : (
        <button onClick={() => dispatch({ type: "SET_LIST_VISIBLE" })}>
          Show
        </button>
      )}
    </div>
  );
}

export default App;
