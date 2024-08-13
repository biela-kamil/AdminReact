import { Col, Grid, Row } from 'rsuite'
import { capitalize } from '../../../utils'
import { useTranslation } from 'react-i18next'
import { type ReactElement } from 'react'

import { createOrganisation } from '../../../api/organisations'
import useNavigate from '../../../hooks/useNavigate'
import Form from '../../Form'

export default function OrganisationCreateForm (): ReactElement {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const MY_FORM = {
    $schema: 'https://unpkg.com/lets-form/schemas/react-rsuite5/form.json',
    version: 1,
    layout: 'vertical',
    validationMode: 'onSubmit',
    fluid: true,
    labelSubmit: capitalize(t('submit')),
    showErrors: 'inline',
    fields: [
      {
        component: 'input-text',
        label: capitalize(t('organisation name')),
        name: 'organisationName',
        required: true,
        validation: {
          minLength: 3
        }
      },
      {
        component: 'input-text',
        label: capitalize(t('user email')),
        name: 'userEmail',
        required: true,
        validation: {
          minLength: 3
        }
      },
      {
        component: 'input-text',
        label: capitalize(t('user first name')),
        name: 'userName',
        required: true,
        validation: {
          minLength: 3
        }
      },
      {
        component: 'input-text',
        label: capitalize(t('user surname')),
        name: 'userSurname',
        required: true,
        validation: {
          minLength: 3
        }
      }
    ]
  }

  interface OrganisationCreateForm {
    organisationName: string
    userEmail: string
    userName: string
    userSurname: string
  }

  const handleSubmit = ({ organisationName, userName, userEmail, userSurname }: OrganisationCreateForm): void => { createOrganisation({ organisationName, userSurname, userEmail, userName }).then(() => { navigate('/organisations') }).catch(() => {}) }

  return (
        <>
            <Grid fluid={true}>
                <Form onSubmit={handleSubmit} form={MY_FORM} defaultValues={{ organisationName: '', userName: '', userEmail: '', userSurname: '' }}/>
            </Grid>

        </>
  )
}
