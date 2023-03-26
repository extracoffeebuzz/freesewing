import Head from 'next/head'
import { Header } from 'site/components/header.mjs'
import { Footer } from 'shared/components/footer/index.mjs'
import { Search } from 'site/components/search.mjs'

export const LayoutWrapper = ({ app, children = [], search, setSearch, noSearch = false }) => {
  return (
    <div
      className={`
    flex flex-col justify-between
    min-h-screen
    bg-base-100
    `}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header app={app} setSearch={setSearch} />
      <main className="grow">{children}</main>
      {!noSearch && search && (
        <>
          <div
            className={`
          fixed w-full max-h-screen bg-base-100 top-0 z-30 pt-0 pb-16 px-8
          md:rounded-lg md:top-24
          md:max-w-xl md:m-auto md:inset-x-12
          md:max-w-2xl
          lg:max-w-4xl
        `}
          >
            <Search app={app} search={search} setSearch={setSearch} />
          </div>
          <div className="fixed top-0 left-0 w-full min-h-screen bg-neutral z-20 bg-opacity-70"></div>
        </>
      )}
      <Footer app={app} />
    </div>
  )
}
