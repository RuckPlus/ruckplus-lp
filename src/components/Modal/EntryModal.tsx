import { useState } from 'react'
import { Button, Checkbox, Grid, Input, Link, Modal, Row, Text, useInput } from '@nextui-org/react'
import { Message, Send } from 'react-iconly'
import ConpletedModal from '@/components/Modal/CompletedModal'
import useModal from '@/hooks/useModal'

type EntryModalProps = {
  open: boolean
  closeModal: () => void
}

const EntryModal = (props: EntryModalProps) => {
  const { open, closeModal: closeEntryModal } = props

  const [errorMessage, setErrorMessage] = useState('')

  const { value: name, setValue: setName } = useInput('')
  const { value: email, setValue: setEmail } = useInput('')
  const { value: agree, setValue: setAgree } = useInput('false')

  const { open: isCompletedModal, closeModal: closeComplatedModal, openModal: openCompletedModal } = useModal()

  const handleGoTo = (path: string) => {
    window.open(path, '_blank')
  }

  const handleEntry = () => {
    try {
      if (!name) {
        throw new Error('名前を入力してください。')
      }
      if (!email) {
        throw new Error('メールアドレスを入力してください。')
      }
      if (!email.match(/.+@.+\..+/)) {
        throw new Error('メールアドレスの形式が正しくありません。')
      }
      if (agree === 'false') {
        throw new Error('個人情報の取り扱いに同意してください。')
      }

      setErrorMessage('')

      openCompletedModal()
    } catch (error: any) {
      console.error(error)
      setErrorMessage(error.message)
    }
  }

  return (
    <Modal
      aria-labelledby='entry-modal'
      open={open}
      onClose={() => closeEntryModal()}
      width='560px'
      css={{
        mx: 16,
      }}
      scroll
      blur
      closeButton
    >
      <Modal.Header>
        <Text b size={18}>
          応募フォーム
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container gap={2}>
          {errorMessage && (
            <Grid xs={12} justify='center'>
              <Text color='error'>{errorMessage}</Text>
            </Grid>
          )}
          <Grid xs={12} direction='column'>
            <Input
              value={name}
              clearable
              bordered
              fullWidth
              color='primary'
              size='lg'
              placeholder='名前'
              contentLeft={<Send set='bold' />}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid xs={12} direction='column'>
            <Input
              value={email}
              clearable
              bordered
              fullWidth
              color='primary'
              size='lg'
              placeholder='メールアドレス'
              contentLeft={<Message set='bold' />}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid xs={12}>
            <Row justify='center'>
              <Checkbox
                value={agree}
                size='sm'
                onChange={(checked) => setAgree(checked.toString())}
              >
                <Link onClick={() => handleGoTo('/privacy')}>個人情報の取り扱い</Link>に同意する
              </Checkbox>
            </Row>
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button flat auto color='error' onClick={() => closeEntryModal()}>
          閉じる
        </Button>
        <Button auto onClick={() => handleEntry()}>
          応募する
        </Button>
      </Modal.Footer>
      <ConpletedModal
        open={isCompletedModal}
        closeModal={closeComplatedModal}
      />
    </Modal>
  )
}

export default EntryModal
