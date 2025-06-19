import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  pet: string;
  servico: string;
  mensagem: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tia Ká Hospedagem Pet';

  formData: FormData = {
    nome: '',
    email: '',
    telefone: '',
    pet: '',
    servico: '',
    mensagem: ''
  };

  onSubmit() {
    if (this.isFormValid()) {
      // Simular envio do formulário
      console.log('Dados do formulário:', this.formData);
      
      // Criar mensagem para WhatsApp
      const whatsappMessage = this.createWhatsAppMessage();
      const whatsappUrl = `https://wa.me/5521964983408?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Abrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Limpar formulário
      this.resetForm();
      
      // Mostrar mensagem de sucesso
      alert('Mensagem enviada! Você será redirecionado para o WhatsApp.');
    }
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.nome &&
      this.formData.email &&
      this.formData.telefone &&
      this.formData.pet &&
      this.formData.servico
    );
  }

  private createWhatsAppMessage(): string {
    return `Olá! Gostaria de agendar uma visita na Tia Ká Hospedagem Pet.

*Dados do contato:*
Nome: ${this.formData.nome}
E-mail: ${this.formData.email}
Telefone: ${this.formData.telefone}

*Informações do Pet:*
Nome do Pet: ${this.formData.pet}
Serviço de interesse: ${this.formData.servico}

*Mensagem:*
${this.formData.mensagem || 'Gostaria de conhecer melhor os serviços.'}

Aguardo retorno!`;
  }

  private resetForm(): void {
    this.formData = {
      nome: '',
      email: '',
      telefone: '',
      pet: '',
      servico: '',
      mensagem: ''
    };
  }
}

