using Microsoft.EntityFrameworkCore.Migrations;

namespace PlataformaTccSuporte.Migrations
{
    public partial class AddedIncomeCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "incomeCategoryId",
                table: "Income",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "IncomeCategory",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncomeCategory", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Income_incomeCategoryId",
                table: "Income",
                column: "incomeCategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Income_IncomeCategory_incomeCategoryId",
                table: "Income",
                column: "incomeCategoryId",
                principalTable: "IncomeCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Income_IncomeCategory_incomeCategoryId",
                table: "Income");

            migrationBuilder.DropTable(
                name: "IncomeCategory");

            migrationBuilder.DropIndex(
                name: "IX_Income_incomeCategoryId",
                table: "Income");

            migrationBuilder.DropColumn(
                name: "incomeCategoryId",
                table: "Income");
        }
    }
}
