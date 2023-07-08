import { Container, Grid, Link, Text } from '@nextui-org/react'
import type { NextPage } from 'next'

const PrivacyPage: NextPage = () => {
  const fontSize = 14
  const mb = 16

  return (
    <Container
      id='body'
      css={{
        '@smMax': {
          py: 40,
        },
        '@mdMin': {
          px: 320,
          py: 32,
        },
      }}
    >
      <Grid.Container gap={2} direction='column'>
        <Grid>
          <Text h4>プライバシーポリシー</Text>
        </Grid>
        <Grid>
          <Text size={fontSize}>ご応募の際に開示していただく個人情報について</Text>
        </Grid>

        <Grid xs={12} direction='column'>
          <Text h5 size={fontSize} css={{ mb: mb }}>
            利用目的について
          </Text>
          <Text size={fontSize} css={{ mb: mb }}>
            エントリーの際にご登録いただいた内容は、下記目的で利用します。
            <br />
            ・採用を決定する際の書類選考や面接時の参考資料
            <br />
            ・採用選考結果や面接のご案内
            <br />
            ・採用および入社に関する手続きや問い合わせ対応
            <br />
            ・当社グループ企業の採用募集に関するご案内
          </Text>
          <Text size={fontSize}>
            予めご本人の同意を得ることなく個人情報を第三者に開示・提供することはありません。
          </Text>
        </Grid>

        <Grid xs={12} direction='column'>
          <Text size={fontSize} css={{ mb: mb }}>
            株式会社RuckPlus 個人情報保護管理責任者
            <br />
            東京都豊島区東池袋1丁目36-7アルテール池袋201
          </Text>
          <Text size={fontSize} css={{ mb: mb }}>
            個人情報は、以下の個人情報保護管理者が責任をもって管理するものとします。
          </Text>
          <Text size={fontSize} css={{ mb: mb }}>
            ■個人情報に関するお問い合わせ先
            <br />
            株式会社Ruckplus 個人情報相談窓口
            <br />
            Eメール: rucktech@ruckplus-tech.io
          </Text>
          <Text size={fontSize}>
            株式会社RuckPlus
            <br />
            代表取締役 増田 健太郎
            <br />
            東京都豊島区東池袋1丁目36-7アルテール池袋201
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default PrivacyPage
