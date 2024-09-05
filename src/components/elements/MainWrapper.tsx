const FlexWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className= "" }) => {
    return (
      <main className={`flex flex-col overflow-hidden bg-neutral-900 font-mono ${className}`}>
        {children}
      </main>
    );
  };
const GridWrapper: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className= "" }) => {
    return (
      <main className={`grid overflow-hidden bg-neutral-900 h-[100vh] place-items-center font-mono ${className}`}>
        {children}
      </main>
    );
  };
  
  export {FlexWrapper,GridWrapper};