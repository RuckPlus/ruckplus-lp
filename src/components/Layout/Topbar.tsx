import { Button, Link, Navbar, Text } from '@nextui-org/react'
import { consts } from '@/config/constants'

export default function Topbar() {
  return (
    <Navbar isBordered variant='floating'>
      <Navbar.Brand>
        <Text b color='inherit' hideIn='xs'>
          {consts.companyName}
        </Text>
      </Navbar.Brand>
      <Navbar.Content>
        <Navbar.Item>
          <Button auto flat color='secondary' as={Link} href={consts.companyUrl}>
            企業サイト
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}