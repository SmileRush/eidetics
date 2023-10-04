# UI Library


Still in development, but the goal is to have a library of UI components that can be used in any project.

Possible use modal, tab, input

## Components

### Modal

#### Description
Modal component

#### Usage
```typescript
import { Modal } from 'eidetics'

interface Props extends React.PropsWithChildren {}

const EideticsPage: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Modal.Provider>
        <Modal.Opener>
          열기
        </Modal.Opener>
        <Modal.Container>
          <Modal.Header>
            헤더
          </Modal.Header>
          <Modal.Body>
            바디
          </Modal.Body>
          <Modal.Closer>
            닫기
          </Modal.Closer>
        </Modal.Container>
      </Modal.Provider>
    </>
  )
}

export default EideticsPage
```