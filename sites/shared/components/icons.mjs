import { logoPath } from 'shared/components/logos/freesewing.mjs'

export const IconWrapper = ({
  className = 'w-6 h-6',
  stroke = 2,
  children = null,
  fill = false,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={fill ? 'currentColor' : 'none'}
    viewBox="0 0 24 24"
    strokeWidth={stroke}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className + ' icon'}
  >
    {children}
  </svg>
)

export const BioIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
  </IconWrapper>
)

export const BoxIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </IconWrapper>
)

export const Camera = (props) => (
  <IconWrapper {...props}>
    <>
      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </>
  </IconWrapper>
)

export const CisFemaleIcon = (props) => (
  <IconWrapper {...props}>
    <path d="m 8.233159,2.5000002 c 0,0 0.03684,1.4367676 0.07562,2.1541457 C 8.413989,6.5901608 7.3671071,6.9496995 7.3372662,8.1692173 7.3029172,9.5719723 8.2152,10.315942 8.255388,12.267223 8.290568,13.973294 7.1739465,15.012709 7.1739465,17.259683 9.46861,17.549817 10.668009,19.205086 11.354231,21.5 h 0.109763 0.93923 0.109803 c 0.686181,-2.294914 1.88558,-3.950183 4.180285,-4.240317 0,-2.246974 -1.116622,-3.286389 -1.081483,-4.99246 0.04015,-1.951281 0.952433,-2.6952507 0.918122,-4.0980057 -0.0298,-1.2195178 -1.076723,-1.5790565 -0.971513,-3.5150714 0.0389,-0.7173781 0.07562,-2.1541457 0.07562,-2.1541457 h -0.722313 c 0,1.5276628 -1.146752,3.7763442 -2.978112,3.7763442 -1.831402,0 -2.978154,-2.2486814 -2.978154,-3.7763442 z" />
  </IconWrapper>
)

export const CisMaleIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M 6.2021092,6.7988281 C 5.0433189,10.972649 5.2215488,13.211802 5.2215488,16.798828 h 5.8983122 l 0.143133,-1.21128 c 0.331559,-1.834081 0.655671,-2.543616 1.078829,0.07477 l 0.134587,1.136509 h 5.896176 c 0,-3.587026 0.180363,-5.826179 -0.978425,-9.9999999 z" />
  </IconWrapper>
)

export const ClearIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
  </IconWrapper>
)

export const CloseIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M6 18L18 6M6 6l12 12" />
  </IconWrapper>
)

export const CogIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
  </IconWrapper>
)

export const CommunityIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </IconWrapper>
)

export const CompareIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
  </IconWrapper>
)

export const ControlIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
  </IconWrapper>
)

export const CopyIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </IconWrapper>
)

export const DesignIcon = (props) => (
  <IconWrapper {...props} stroke={1}>
    <path d="m11.975 2.9104c-1.5285 0-2.7845 1.2563-2.7845 2.7848 0 0.7494 0.30048 1.4389 0.78637 1.9394a0.79437 0.79437 0 0 0 0.0084 0.00839c0.38087 0.38087 0.74541 0.62517 0.94538 0.82483 0.19998 0.19966 0.25013 0.2645 0.25013 0.51907v0.65964l-9.1217 5.2665c-0.28478 0.16442-0.83603 0.46612-1.3165 0.9611-0.48047 0.49498-0.92451 1.3399-0.66684 2.2585 0.22026 0.78524 0.7746 1.3486 1.3416 1.5878 0.56697 0.23928 1.0982 0.23415 1.4685 0.23415h18.041c0.37033 0 0.90158 0.0051 1.4686-0.23415 0.56697-0.23928 1.1215-0.80261 1.3418-1.5878 0.25767-0.91859-0.18662-1.7636-0.66709-2.2585-0.48046-0.49498-1.0315-0.79669-1.3162-0.9611l-8.9844-5.1873v-0.73889c0-0.70372-0.35623-1.2837-0.71653-1.6435-0.35778-0.3572-0.70316-0.58503-0.93768-0.81789-0.20864-0.21601-0.33607-0.50298-0.33607-0.83033 0-0.67 0.52595-1.1962 1.1959-1.1962 0.67001 0 1.1962 0.5262 1.1962 1.1962a0.79429 0.79429 0 0 0 0.79434 0.79427 0.79429 0.79429 0 0 0 0.79427-0.79427c0-1.5285-1.2563-2.7848-2.7848-2.7848zm-0.06859 8.2927 8.9919 5.1914c0.28947 0.16712 0.69347 0.41336 0.94393 0.67138 0.25046 0.25803 0.31301 0.3714 0.24754 0.60483-0.10289 0.36677-0.19003 0.40213-0.35969 0.47373-0.16967 0.07161-0.47013 0.09952-0.80336 0.09952h-18.041c-0.33323 0-0.6337-0.02792-0.80336-0.09952-0.16967-0.07161-0.25675-0.10696-0.35963-0.47373-0.06548-0.23342-0.00303-0.3468 0.24748-0.60483 0.25046-0.25803 0.65471-0.50426 0.94418-0.67138z" />
  </IconWrapper>
)

export const DiscordIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
  </IconWrapper>
)

export const DocsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </IconWrapper>
)

export const DownIcon = (props) => (
  <IconWrapper {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </IconWrapper>
)

export const EditIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </IconWrapper>
)

export const ExportIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </IconWrapper>
)

export const FacebookIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
  </IconWrapper>
)

export const FilterIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </IconWrapper>
)

export const FreeSewingIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d={logoPath} />
  </IconWrapper>
)

export const GithubIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </IconWrapper>
)

export const GuidesIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
  </IconWrapper>
)

export const HeartIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </IconWrapper>
)

export const HelpIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconWrapper>
)

export const HomeIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </IconWrapper>
)

export const I18nIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  </IconWrapper>
)

export const InstagramIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </IconWrapper>
)

export const LabelIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path d="M6 6h.008v.008H6V6z" />
  </IconWrapper>
)

export const LeftIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M15 19l-7-7 7-7" />
  </IconWrapper>
)

export const MenuIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </IconWrapper>
)

export const NewsletterIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
  </IconWrapper>
)

export const NoIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </IconWrapper>
)

export const NoteIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
  </IconWrapper>
)

export const OkIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M4.5 12.75l6 6 9-13.5" />
  </IconWrapper>
)

export const OptionsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </IconWrapper>
)

export const PageIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </IconWrapper>
)

export const PageSizeIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
  </IconWrapper>
)

export const PrintIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
  </IconWrapper>
)

export const RedditIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d="M 11.710829,0.00384705 C 5.0683862,0.16990815 -0.16221405,5.6505729 0.00384705,12.293016 0.16990814,18.686369 5.3178021,23.833614 11.628124,24.082706 18.270567,24.248767 23.833939,19.018167 24,12.375723 V 11.710829 C 23.833939,5.0683862 18.353273,-0.16221404 11.710829,0.00384705 Z m 5.187788,5.10021625 c 0.15698,0.00649 0.313636,0.048326 0.458939,0.1313569 0.581214,0.3321223 0.912687,1.0793971 0.580565,1.660611 C 17.605998,7.4772452 16.858724,7.808718 16.27751,7.4765965 15.862357,7.3105352 15.614238,6.8947339 15.614238,6.3965506 L 13.038995,5.8159854 12.208689,9.55236 c 1.826672,0.08303 3.48858,0.664893 4.651007,1.495199 0.664245,-0.664245 1.826673,-0.664245 2.490917,0 0.332122,0.332121 0.49786,0.747274 0.49786,1.245457 0.249091,0.747275 -0.249092,1.327193 -0.830306,1.576284 v 0.49948 c 0,2.740009 -3.155161,4.897506 -7.057597,4.897506 -3.9024357,0 -7.0575963,-2.157497 -7.0575963,-4.897506 V 13.8693 C 3.9896377,13.454147 3.6578398,12.458754 3.989962,11.545418 c 0.2490916,-0.664245 0.9120387,-1.08037 1.5762832,-0.99734 0.4981831,0 0.9133359,0.167358 1.2454581,0.499481 C 8.2232228,10.134222 9.8848065,9.55236 11.545418,9.55236 l 0.913011,-4.1515273 c 0,-0.083031 0.08271,-0.1654124 0.08271,-0.1654125 0.08303,-0.08303 0.166711,-0.084328 0.249741,-0.084328 l 2.906069,0.664893 C 15.946037,5.3800751 16.427678,5.084603 16.898617,5.1040633 Z M 9.3026198,12.293016 c -0.6642443,0 -1.2454583,0.581214 -1.2454583,1.245458 0,0.664245 0.498183,1.245459 1.2454583,1.245459 0.6642442,0 1.2454582,-0.581214 1.2454582,-1.245459 0,-0.664244 -0.581214,-1.245458 -1.2454582,-1.245458 z m 5.4813132,0 c -0.664245,0 -1.245459,0.581214 -1.245459,1.245458 0,0.664245 0.581214,1.245459 1.245459,1.245459 0.664245,0 1.245458,-0.581214 1.245458,-1.245459 0,-0.664244 -0.581213,-1.245458 -1.245458,-1.245458 z m -5.3872557,3.943952 c -0.072653,0 -0.135249,0.04021 -0.1767645,0.123249 -0.1660605,0.16606 -0.1660605,0.332121 0,0.415152 0.8303052,0.830306 2.4905922,0.914633 2.9887762,0.914633 0.498183,0 2.077061,-0.08433 2.990396,-0.914633 -0.08303,-0.08303 -0.084,-0.249092 -0.167034,-0.415152 -0.166061,-0.166062 -0.332121,-0.166062 -0.415152,0 -0.498183,0.581213 -1.660611,0.747598 -2.490917,0.747598 -0.830305,0 -1.992733,-0.166385 -2.4909165,-0.747598 -0.08303,-0.08303 -0.1657365,-0.123249 -0.2383882,-0.123249 z" />
  </IconWrapper>
)

export const RightIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M9 5l7 7-7 7" />
  </IconWrapper>
)

export const RssIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
  </IconWrapper>
)

export const SearchIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </IconWrapper>
)

export const SettingsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </IconWrapper>
)

export const ShowcaseIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </IconWrapper>
)

export const ThemeIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </IconWrapper>
)

export const TipIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </IconWrapper>
)

export const TutorialIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
  </IconWrapper>
)

export const TwitterIcon = (props) => (
  <IconWrapper {...props} stroke={0} fill>
    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
  </IconWrapper>
)

export const UnitsIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
  </IconWrapper>
)

export const UserIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconWrapper>
)

export const VersionIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </IconWrapper>
)

export const XrayIcon = (props) => (
  <IconWrapper {...props}>
    <path d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
  </IconWrapper>
)
