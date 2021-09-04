import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
const HomePage = () => {
const logmeout = useAuth()


  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>HomePage</h1>

      <p>

        <Link to={routes.home()}>Home</Link>
      </p>
      <p>

        <Link to={routes.login()}>Login</Link>
      </p>
      <p>
<button onClick={() => logmeout.logOut()}>Log Out</button>

      </p>
    </>
  )
}

export default HomePage
