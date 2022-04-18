function Error({ statusCode, message, description, fileName, lineNumber }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <section className='flex flex-col md:flex-wrap justify-start md:items-center mt-24 mx-8 md:mx-64'>
        {statusCode
          ? <h2 className="text-gray-600 font-bold text-4xl md:text-6xl">An error {statusCode} occurred on server</h2>
          : <h2>An error occured on client</h2>}

        {message
          ? <p className="text-gray-400 text-2xl md:text-4xl">{message}</p>
          : <p>Unknown error occured</p> }

        <p>{description}</p>
        <p>{fileName}</p>
        <p>{lineNumber}</p>
      </section>      
    </div>
  )
}
  
Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  const {message, description, fileName, lineNumber} = err;
  return { statusCode, message, description, fileName, lineNumber }
}

export default Error