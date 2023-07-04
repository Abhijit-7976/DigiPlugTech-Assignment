const MainForm = () => {
  return (
    <form className="main-form">
      <div className="command-container">
        <div className="command-container-control">
          <input type="text"></input>
          <button>Run Command</button>
        </div>
      </div>
      <div className="compose-container">
        <button>Compose</button>
      </div>
    </form>
  );
};

export default MainForm;
