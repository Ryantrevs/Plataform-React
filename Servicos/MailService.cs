using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace PlataformaTccSuporte.Servicos
{

    public interface IServicoEmail
    {
        public Task<SendGrid.Response> EnviarEmail(String nome, String destinatario, List<String> arquivos);
        public Task<SendGrid.Response> EnviarEmail(String nome, String destinatario, string Mensagem, string assunto);
    }
    public class MailService : IServicoEmail
    {
        public async Task<SendGrid.Response> EnviarEmail(String nome, String destinatario, List<String> arquivos)
        {
            
            var client = new SendGridClient("xxx");
            var from = new EmailAddress("mailmkt@suportetcc.com", "TccSuporte");
            var subject = "Temos Boas Novas";
            var to = new EmailAddress(destinatario, nome);
            var plainTextContent = "Seu trabalho acaba de ser finalizado, estamos muito feliz em poder estar te ajudando nessa etapa ´da vida, aproveite e se puder, recomende para seus amigos o nosso serviço";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent,"teste");
            foreach (var arq in arquivos)
            {
                String[] nomeArquivo = arq.Split(@"\");
                byte[] byteArray = Encoding.UTF8.GetBytes(arq);

                Stream theStream = new MemoryStream(byteArray);

                await msg.AddAttachmentAsync(nomeArquivo[nomeArquivo.Length-1], theStream);
            }
            var response = await client.SendEmailAsync(msg);
            return response;
        }
        public async Task<SendGrid.Response> EnviarEmail(String nome, String destinatario,string Mensagem,string assunto)
        {

            var client = new SendGridClient("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");
            var from = new EmailAddress("mailmkt@suportetcc.com", "TccSuporte");
            var subject = assunto;
            var to = new EmailAddress(destinatario, nome);
            var plainTextContent = Mensagem;
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, "");            
            var response = await client.SendEmailAsync(msg);
            return response;
        }


    }
}
