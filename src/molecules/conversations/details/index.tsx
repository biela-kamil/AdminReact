import { type ReactElement } from 'react'
import Details from '../../Details'
import { capitalize, getDateTimeText } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { type Conversation } from '../../../types'

interface ConversationDetailsProps {
  conversation: Conversation | undefined
  isLoading: boolean
  isError: boolean
  error: unknown
}

export default function ConversationDetails ({ conversation: dataConversation, isLoading, isError, error }: ConversationDetailsProps): ReactElement {
  const { t } = useTranslation()

  const rows = [
    {
      header: 'ID',
      field: 'id'
    },
    {
      header: capitalize(t('title')),
      field: 'title'
    },
    {
      header: capitalize(t('user')),
      field: 'user.fullName',
      link: {
        path: '/users/:UserID',
        data: {
          UserID: 'user.id'
        }
      }
    },
    {
      header: capitalize(t('website')),
      field: 'website.url',
      link: {
        path: '/websites/:WebsiteID',
        data: {
          WebsiteID: 'website.id'
        }
      }
    }, {
      header: capitalize(t('archived date')),
      field: 'archiveAt'
    },
    {
      header: capitalize(t('created date')),
      field: 'createdAt'
    },

    {
      header: capitalize(t('updated date')),
      field: 'updatedAt'
    }
  ]

  const website = dataConversation
    ? {
        id: dataConversation.id,
        title: dataConversation.title,
        user: dataConversation.user,
        website: dataConversation.website,
        archiveAt: getDateTimeText(dataConversation.archiveAt),
        createdAt: getDateTimeText(dataConversation.createdAt),
        updatedAt: getDateTimeText(dataConversation.updatedAt)
      }
    : {}

  return (
      <>

        <Details data={website} rows={rows} isLoading={isLoading} isError={isError} error={error} />
      </>

  )
}
