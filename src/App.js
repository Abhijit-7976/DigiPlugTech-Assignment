import ContentForm from "./components/ContentForm";
import Header from "./components/Header";
import MainForm from "./components/main-form/MainForm";
import ToolBar from "./components/toolbar/ToolBar";

const App = () => {
  return (
    <main>
      <Header />
      <ContentForm />
      <div>
        <ToolBar />
        <div className="main-container">
          <MainForm />
        </div>
      </div>
    </main>
  );
};

export default App;
