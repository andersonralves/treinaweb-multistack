import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <UserInformation
        name={"Anderson"}
        picture="https://github.com/andersonralves.png"
        rating={5}
        description="Bauru"
      />

      <UserInformation
        name={"Regina"}
        picture=""
        rating={5}
        description="Bauru"
      />
    </div>
  );
}
