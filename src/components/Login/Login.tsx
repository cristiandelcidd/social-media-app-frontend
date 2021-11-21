import Logo from "../Logo/Logo";
import Form from "../Form/Form";

const Login = () => {
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col md:flex-row justify-center flex-wrap align-middle p-2 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center justify-items-end w-full flex-col">
          <div className="block md:relative mx-auto w-11/12 md:w-9/12 max-w-xl mb-6 md:mb-0 md:ml-24">
            <div className="block top-0 left-0 w-full md:w-9/12 mt-0 md:mt-7 md:absolute md:-top-28 md:-left-9">
              <Logo />
            </div>
            <h2 className="text-2xl md:text-3xl font-open-sans m-0">
              Connect with friends and the world around you on Facebook.
            </h2>
          </div>
        </div>
        <div className="flex justify-around m-auto flex-col">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Login;
