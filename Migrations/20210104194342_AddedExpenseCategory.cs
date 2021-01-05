using Microsoft.EntityFrameworkCore.Migrations;
namespace PlataformaTccSuporte.Migrations
{
    public partial class AddedExpenseCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ExpenseCategoryId",
                table: "Expenses",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "userId",
                table: "Expenses",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "ExpenseCategory",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExpenseCategory", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_ExpenseCategoryId",
                table: "Expenses",
                column: "ExpenseCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Expenses_userId",
                table: "Expenses",
                column: "userId");

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_ExpenseCategory_ExpenseCategoryId",
                table: "Expenses",
                column: "ExpenseCategoryId",
                principalTable: "ExpenseCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Expenses_AspNetUsers_userId",
                table: "Expenses",
                column: "userId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_ExpenseCategory_ExpenseCategoryId",
                table: "Expenses");

            migrationBuilder.DropForeignKey(
                name: "FK_Expenses_AspNetUsers_userId",
                table: "Expenses");

            migrationBuilder.DropTable(
                name: "ExpenseCategory");

            migrationBuilder.DropIndex(
                name: "IX_Expenses_ExpenseCategoryId",
                table: "Expenses");

            migrationBuilder.DropIndex(
                name: "IX_Expenses_userId",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "ExpenseCategoryId",
                table: "Expenses");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "Expenses");
        }
    }
}
