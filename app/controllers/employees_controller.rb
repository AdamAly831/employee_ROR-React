class EmployeesController < ApplicationController
  def index
  @employees - Employees.all
  render component: 'Employees', props: { employees: @employeess}
  end

def create
  @employee - Employee.new (employee_params)
  respond_to do |format|
    format.json do 
        if @employee.save
          render :json => @employee
        else
          render :json => { :errors => @employee.errors.messages }, :status => 422
        end
      end
    end
  end
 
 private
 def employee_params
  params.require(:employee).permite(:name, :email, :manager)
end
end
