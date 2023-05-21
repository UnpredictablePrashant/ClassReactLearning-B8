import './App.css';
import Header from './components/Header';
import Contactus from './components/Contactus';

function App() {
  const contactdetails = {
    name: 'Vamsi',
    phone: '999999999',
    email: 'prashant.dey@herovired.com'
  }
  const salutation = ['namaste', 'hello', 'hola', 'bonjour']
  return (
    <div>
      <Header></Header>
      <Contactus name={contactdetails.name} phone={contactdetails.phone} email={contactdetails.email} salutation={salutation}></Contactus>
    </div>
  );
}

export default App;
