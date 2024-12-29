import ModeToggle from '../mode-toggle';

const Navigation = () => {
  return (
    <nav className="px-4 py-3 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">Random</div>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navigation;
