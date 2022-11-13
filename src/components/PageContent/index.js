import Header from "./Header";
import Main from "./Main";

export default function PageContent({ darkMode, setDarkMode }) {
  return (
    <>
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </>
  );
}
