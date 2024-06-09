import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('app')}</h1>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
