const Button = ({ children, onClick, className = "" }) => {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-2 text-white text-sm font-medium rounded-xl hover:opacity-90 transition-opacity ${className}`}
        style={{
          background: 'linear-gradient(180deg, #626668 0%, #282B2E 100%)'
        }}
      >
        {children || "Start Fulfilling"}
      </button>
    )
  }
  
  export default Button