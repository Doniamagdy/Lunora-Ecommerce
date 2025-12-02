import NoTfound from "../assets/404_error_page_not_found.gif";

function NotFoundPage() {
  return (
      <div className="mt-40">
          
          <img
            src={NoTfound}
            alt="No page found"
            className="w-5/12 mx-auto"
          />
    
        </div>
  )
}

export default NotFoundPage
