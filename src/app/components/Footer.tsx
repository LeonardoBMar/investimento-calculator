export function Footer() {
  return (
    <footer className="bg-gray-50 py-8 border-t">
      <div className="container mx-auto text-center">
        {/* Links */}
        <div className="mb-6 flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-600"
            aria-label="Facebook"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12.81V14.708H9.692v-3.634h3.118V8.41c0-3.1 1.894-4.788 4.66-4.788 1.324 0 2.463.1 2.794.143v3.24h-1.917c-1.504 0-1.795.714-1.795 1.762v2.31h3.59l-.468 3.634h-3.122V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.405 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-600"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.196 4.916 4.916 0 00-8.384 4.482A13.939 13.939 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.904 4.904 0 01-2.228-.616v.061a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.6 3.417 9.867 9.867 0 01-6.102 2.104c-.398 0-.79-.023-1.175-.068a13.945 13.945 0 007.557 2.213c9.054 0 14-7.496 14-13.986 0-.213-.004-.425-.015-.636A10.025 10.025 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-indigo-600"
            aria-label="Instagram"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.313 3.608 1.288.975.975 1.226 2.242 1.288 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.313 2.633-1.288 3.608-.975.975-2.242 1.226-3.608 1.288-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.313-3.608-1.288-.975-.975-1.226-2.242-1.288-3.608C2.175 15.584 2.163 15.204 2.163 12c0-3.204.012-3.584.07-4.849.062-1.366.313-2.633 1.288-3.608.975-.975 2.242-1.226 3.608-1.288 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.015 7.052.074 5.765.134 4.632.373 3.678 1.327.373 4.632.134 5.765.074 7.052.015 8.332 0 8.756 0 12c0 3.244.015 3.668.074 4.948.06 1.287.299 2.42 1.254 3.375.955.955 2.088 1.194 3.375 1.254 1.28.059 1.704.074 4.948.074s3.668-.015 4.948-.074c1.287-.06 2.42-.299 3.375-1.254.955-.955 1.194-2.088 1.254-3.375.059-1.28.074-1.704.074-4.948s-.015-3.668-.074-4.948c-.06-1.287-.299-2.42-1.254-3.375-.955-.955-2.088-1.194-3.375-1.254C15.668.015 15.244 0 12 0z" />
              <circle cx="12" cy="12" r="3.2" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} InvestSim. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
