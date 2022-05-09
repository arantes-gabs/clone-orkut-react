import AppLayout from "layouts/AppLayout"
function wrapElement({ element }) {
  return <AppLayout>{element}</AppLayout>
}

export default wrapElement
