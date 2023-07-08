import { Button, Modal, Spacer, Text, Grid } from '@nextui-org/react'

type JobDetailModalProps = {
  open: boolean
  closeModal: () => void
}

const JobDetailModal = (props: JobDetailModalProps) => {
  const { open, closeModal } = props

  return (
    <Modal
      aria-labelledby='job-detail-modal'
      open={open}
      onClose={() => closeModal()}
      width='560px'
      css={{
        mx: 16,
      }}
      scroll
      closeButton
    >
      <Modal.Header>
        <Text b size={18}>
          採用情報
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Grid.Container gap={2}>
          <Grid xs={12} direction='column'>
            <Text b>採用企業</Text>
            <Text>株式会社RuckPlus</Text>

            <Spacer y={1} />

            <Text b>職務内容</Text>
            <Text css={{ pb: 8 }}>
              Webシステム開発するエンジニアとして活躍していただき、web3エンジニアを目指していただきます。
            </Text>
            <Text css={{ pb: 8 }}>
              【ロードマップ】
              <br />
              Phase1: ロードマップを作成
              <br />
              Phase2: フルスタックエンジニアになる
              <br />
              Phase3: web3開発技術を高める
              <br />
              Phase4: web3開発案件への参画
              <br />
              Phase5: 自社dAppの立ち上げ
            </Text>
            <Text size={14}>※個人差はありますが、web3案件への参画まで1-2年の期間が必要です。</Text>

            <Spacer y={1} />

            <Text b>応募資格(必須)</Text>
            <Text>
              ・エンジニア経験 (1年以上)
              <br />
            </Text>

            <Spacer y={1} />

            <Text b>応募資格(歓迎)</Text>
            <Text>
              ・Reactを用いた開発経験
              <br />
              ・AWSを用いた開発経験
            </Text>

            <Spacer y={1} />

            <Text b>求める人物像</Text>
            <Text>
              ・web3開発の技術力をつけたい方
              <br />
              ・web3サービスを立ち上げたい方
            </Text>

            <Spacer y={1} />

            <Text b>雇用形態</Text>
            <Text>正社員</Text>

            <Spacer y={1} />

            <Text b>勤務地</Text>
            <Text>本社（東京都豊島区東池袋1丁目36-7アルテール池袋201</Text>
            <Text size={14}>一部リモート勤務あり</Text>

            <Spacer y={1} />

            <Text b>勤務時間</Text>
            <Text>午前9時〜午後6時（実働8時間 + 休憩1時間）</Text>

            <Spacer y={1} />

            <Text b>休日休暇</Text>
            <Text>週休2日制</Text>

            <Spacer y={1} />

            <Text b>諸手当</Text>
            <Text>時間外勤務手当、深夜勤務手当、休日勤務手当、通勤手当など</Text>

            <Spacer y={1} />

            <Text b>試用期間</Text>
            <Text>試用期間あり（3ヵ月）</Text>

            <Spacer y={1} />

            <Text b>保険</Text>
            <Text>健康保険、厚生年金、雇用保険</Text>

            <Spacer y={1} />

            <Text b>諸手当</Text>
            <Text>月給300,000円から月給900,000円（スキル見合い）</Text>
          </Grid>
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button flat auto color='error' onClick={() => closeModal()}>
          閉じる
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default JobDetailModal
