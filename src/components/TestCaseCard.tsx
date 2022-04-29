import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TestCase } from './Types'
import { useFeatures } from '../features/features/useFeatures'

type TestCaseCardProps = {
  testCase: TestCase
  featureId: string | undefined
}

export const TestCaseCard: React.FC<TestCaseCardProps> = (props) => {
  const { testCase, featureId } = props

  const { removeTestCase } = useFeatures()

  return (
    <Card style={{ width: '18rem' }} className={'col-md-4 col-sm-6 col-xs-12'}>
      <Card.Body>
        <Card.Title>{testCase.name}</Card.Title>
        <Card.Text>description: {testCase.description}</Card.Text>

        <Button variant='primary'>
          {/* <Link 
          className='text-light text-decoration-none' to={`/features/${feature.id}`}
          > */}
          Open
          {/* </Link>{' '} */}
        </Button>
        <Button
          onClick={() => {
            console.log('id', testCase.id)
            removeTestCase({ variables: { testCaseId: `${testCase.id}` } })
          }}
        >
          Delete
        </Button>
        <Button variant='primary'>
          <Link className='text-light text-decoration-none' to={`/features/${featureId}/addTestCase/${testCase?.id}`}>
            Edit
          </Link>{' '}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default TestCaseCard