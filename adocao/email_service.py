from django.core.mail import send_mail

def enviar_email_confirmacao(adocao):
    assunto = "Adocao realizada com sucesso!"
    conteudo = f"Parabéns! Você acaba de realizar a adoção do {adocao.pet.nome} com o valor mensal de {adocao.valor} reais, nós do AdoteUmPet ficamos muito felizes com a ajuda :)"
    remetente = "adotepet032@gmail.com"
    destinatario = [adocao.email]
    send_mail(assunto, conteudo, remetente, destinatario)