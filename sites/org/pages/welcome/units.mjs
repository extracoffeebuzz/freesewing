// Dependencies
import dynamic from 'next/dynamic'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { BareLayout } from 'site/components/layouts/bare.mjs'
import { ns as authNs } from 'shared/components/wrappers/auth/index.mjs'
import { ns as imperialNs } from 'shared/components/account/imperial.mjs'
import { WelcomeWrapper } from './index.mjs'

// Translation namespaces used on this page
const namespaces = [...new Set([...imperialNs, ...authNs, ...pageNs])]

/*
 * Some things should never generated as SSR
 * So for these, we run a dynamic import and disable SSR rendering
 */
const DynamicImperial = dynamic(
  () => import('shared/components/account/imperial.mjs').then((mod) => mod.ImperialSettings),
  { ssr: false }
)

/*
 * Each page MUST be wrapped in the PageWrapper component.
 * You also MUST spread props.page into this wrapper component
 * when path and locale come from static props (as here)
 * or set them manually.
 */
const WelcomeUnitsPage = ({ page }) => (
  <PageWrapper {...page} layout={BareLayout} footer={false}>
    <WelcomeWrapper>
      <DynamicImperial title welcome />
    </WelcomeWrapper>
  </PageWrapper>
)

export default WelcomeUnitsPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
      page: {
        locale,
        path: ['welcome', 'units'],
      },
    },
  }
}
