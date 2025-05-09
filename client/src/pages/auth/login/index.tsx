import WelcomeContent from "../common/welcome-content";
function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="col-span-1 lg:flex md:flex hidden">
        <WelcomeContent />
      </div>
      <div>form content</div>
    </div>
  );
}

export default LoginPage;
