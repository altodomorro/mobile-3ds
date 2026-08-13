import tkinter as tk
from tkinter import messagebox
import sqlite3


# -----------------------------
# Banco de dados
# -----------------------------

def criar_banco():
    conexao = sqlite3.connect("clientes.db")
    cursor = conexao.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS clientes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            email TEXT NOT NULL,
            telefone TEXT NOT NULL
        )
    """)

    conexao.commit()
    conexao.close()


# -----------------------------
# Função para salvar cliente
# -----------------------------

def salvar_cliente():
    nome = entrada_nome.get().strip()
    email = entrada_email.get().strip()
    telefone = entrada_telefone.get().strip()

    # Validação dos campos
    if not nome or not email or not telefone:
        messagebox.showwarning(
            "Atenção",
            "Preencha todos os campos antes de salvar."
        )
        return

    try:
        conexao = sqlite3.connect("clientes.db")
        cursor = conexao.cursor()

        cursor.execute("""
            INSERT INTO clientes (nome, email, telefone)
            VALUES (?, ?, ?)
        """, (nome, email, telefone))

        conexao.commit()
        conexao.close()

        messagebox.showinfo(
            "Sucesso",
            "Cliente cadastrado com sucesso!"
        )

        limpar_formulario()

    except sqlite3.Error as erro:
        messagebox.showerror(
            "Erro",
            f"Não foi possível salvar o cliente.\n{erro}"
        )


# -----------------------------
# Função para limpar formulário
# -----------------------------

def limpar_formulario():
    entrada_nome.delete(0, tk.END)
    entrada_email.delete(0, tk.END)
    entrada_telefone.delete(0, tk.END)

    entrada_nome.focus()


# -----------------------------
# Inicialização do banco
# -----------------------------

criar_banco()


# -----------------------------
# Interface gráfica
# -----------------------------

janela = tk.Tk()
janela.title("Cadastro de Clientes")
janela.geometry("400x300")
janela.resizable(False, False)


# Título
titulo = tk.Label(
    janela,
    text="Cadastro de Clientes",
    font=("Arial", 16, "bold")
)
titulo.pack(pady=20)


# Nome
label_nome = tk.Label(janela, text="Nome:")
label_nome.pack()

entrada_nome = tk.Entry(janela, width=40)
entrada_nome.pack(pady=5)


# E-mail
label_email = tk.Label(janela, text="E-mail:")
label_email.pack()

entrada_email = tk.Entry(janela, width=40)
entrada_email.pack(pady=5)


# Telefone
label_telefone = tk.Label(janela, text="Telefone:")
label_telefone.pack()

entrada_telefone = tk.Entry(janela, width=40)
entrada_telefone.pack(pady=5)


# Botões
frame_botoes = tk.Frame(janela)
frame_botoes.pack(pady=20)

botao_salvar = tk.Button(
    frame_botoes,
    text="Salvar",
    width=12,
    command=salvar_cliente
)
botao_salvar.grid(row=0, column=0, padx=5)

botao_limpar = tk.Button(
    frame_botoes,
    text="Limpar",
    width=12,
    command=limpar_formulario
)
botao_limpar.grid(row=0, column=1, padx=5)


# Inicia o programa
janela.mainloop()
